﻿using Microsoft.EntityFrameworkCore;
using MysteryTest.Models;
using Microsoft.Extensions.DependencyInjection;
using MysteryTest_Back.Data;
using Microsoft.DotNet.Scaffolding.Shared.ProjectModel;
using MysteryTest_Back.Services.Interface;
using MysteryTest_Back.Services;

var allowSpecificOrigins = "allowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("MysteryTestContext");
var serverVersion = ServerVersion.AutoDetect(connectionString);

builder.Services.AddDbContext<MysteryTestContext>(
    options => options.
    UseMySql(connectionString, serverVersion: ServerVersion.AutoDetect(connectionString)));

//Ajout des services de base
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowSpecificOrigins,
        policyBuilder =>
        {
            policyBuilder
            .WithOrigins(builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>())
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
        });
});


// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ISalarieService, SalarieService>(); // TODO Ajout du service!

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<MysteryTestContext>();
    context.Database.Migrate();

    SeedSalarie.Initialize(services);
}


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(allowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
