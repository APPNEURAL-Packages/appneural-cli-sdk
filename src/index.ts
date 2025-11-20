import { Command } from "commander";
import { registerSdkCommands } from "./commands/sdk.js";

export default function register(program: Command): void {
  registerSdkCommands(program);
}
