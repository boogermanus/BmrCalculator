using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BmrCalculator.Data.Migrations
{
    public partial class DropBrmsBecauseOfDecimal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BMRs");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BMRs",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    age = table.Column<int>(type: "INTEGER", nullable: false),
                    bmr = table.Column<decimal>(type: "TEXT", nullable: false),
                    createdOn = table.Column<DateTime>(type: "TEXT", nullable: false),
                    height = table.Column<decimal>(type: "TEXT", nullable: false),
                    name = table.Column<string>(type: "TEXT", nullable: true),
                    userId = table.Column<string>(type: "TEXT", nullable: true),
                    weight = table.Column<decimal>(type: "TEXT", nullable: false)
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
    }
}
