using Microsoft.EntityFrameworkCore;
using MysteryTest.Models;
using Microsoft.Extensions.DependencyInjection;
using MysteryTest_Back.Data;
using Microsoft.DotNet.Scaffolding.Shared.ProjectModel;
using MysteryTest_Back.Services.Interface;
using MysteryTest_Back.Services;

var allowSpecificOrigins = "allowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<MysteryTestContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("MysteryTestContext") ?? throw new InvalidOperationException("Connection string 'MysteryTestContext' not found.")));

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

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ISalarieService, SalarieService>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

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
