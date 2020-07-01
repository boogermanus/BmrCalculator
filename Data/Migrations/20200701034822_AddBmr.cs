using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BmrCalculator.Data.Migrations
{
    public partial class AddBmr : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BMRs",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(nullable: true),
                    age = table.Column<int>(nullable: false),
                    weight = table.Column<decimal>(nullable: false),
                    height = table.Column<decimal>(nullable: false),
                    bmr = table.Column<decimal>(nullable: false),
                    createdOn = table.Column<DateTime>(nullable: false),
                    userId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BMRs", x => x.id);
                    table.ForeignKey(
                        name: "FK_BMRs_AspNetUsers_userId",
                        column: x => x.userId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BMRs_userId",
                table: "BMRs",
                column: "userId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BMRs");
        }
    }
}
