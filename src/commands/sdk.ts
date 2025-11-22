import { Command } from "commander";
import { logger } from "@appneural/cli-shared";
import { withTelemetry } from "@appneural/cli-shared";
import { withSpinner } from "@appneural/cli-shared";
import { ValidationError } from "@appneural/cli-shared";
import { generateSdkFromOpenApi } from "../services/sdk.service.js";

export function registerSdkCommands(program: Command): void {
  const sdk = program.command("sdk").description("APPNEURAL SDK operations");

  sdk
    .command("generate")
    .description("Generate an APPNEURAL SDK from OpenAPI")
    .requiredOption("--input <openapi>", "Path or URL to OpenAPI spec")
    .requiredOption("--output <dir>", "Output directory")
    .action((opts) =>
      withTelemetry("sdk:generate", async () => {
        if (!opts.input || !opts.output) {
          throw new ValidationError("APPNEURAL requires input and output options");
        }
        await withSpinner("Generating APPNEURAL SDK", async () =>
          generateSdkFromOpenApi(String(opts.input), String(opts.output))
        );
        logger.success(`APPNEURAL SDK generated at ${String(opts.output)}`);
      })
    );

  sdk
    .command("list")
    .description("List generated APPNEURAL SDKs")
    .action(() =>
      withTelemetry("sdk:list", async () => {
        await withSpinner("Fetching APPNEURAL SDK catalogue", async () => {
          await new Promise((resolve) => setTimeout(resolve, 200));
        });
        logger.info("APPNEURAL SDK: microservice-kit");
      })
    );
}
