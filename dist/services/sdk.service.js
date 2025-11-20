import fs from "fs/promises";
import path from "path";
import { logger } from "@appneural/cli-shared";
export async function generateSdkFromOpenApi(inputPath, outputDir) {
    const resolvedInput = path.resolve(inputPath);
    const resolvedOutput = path.resolve(outputDir);
    await fs.mkdir(resolvedOutput, { recursive: true });
    await fs.writeFile(path.join(resolvedOutput, "README.md"), `# APPNEURAL SDK\nGenerated from ${resolvedInput} (placeholder)\n`, "utf-8");
    logger.info(`APPNEURAL SDK generation placeholder for ${resolvedInput} -> ${resolvedOutput}`);
}
//# sourceMappingURL=sdk.service.js.map