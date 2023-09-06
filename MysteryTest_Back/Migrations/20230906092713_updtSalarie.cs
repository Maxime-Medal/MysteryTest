using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MysteryTest_Back.Migrations
{
    /// <inheritdoc />
    public partial class updtSalarie : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Salarie_Client_ClientId",
                table: "Salarie");

            migrationBuilder.AlterColumn<int>(
                name: "ClientId",
                table: "Salarie",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Salarie_Client_ClientId",
                table: "Salarie",
                column: "ClientId",
                principalTable: "Client",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Salarie_Client_ClientId",
                table: "Salarie");

            migrationBuilder.AlterColumn<int>(
                name: "ClientId",
                table: "Salarie",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Salarie_Client_ClientId",
                table: "Salarie",
                column: "ClientId",
                principalTable: "Client",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
