import { Readable } from "stream";
import yargs from "yargs";
import trianglify from "trianglify";

// parse options
const argv = yargs
  .option("xcolors", {
    description:
      "Set the X-axis colors, each separated by a space in hex format (e.g. '#000000' '#ffffff' ...)",
    type: "array",
  })
  .option("ycolors", {
    description:
      "Set the Y-axis colors, each separated by a space in hex format (e.g. '#000000' '#ffffff' ...)",
    type: "array",
  })
  .option("cellSize", {
    description: "Set the cell size",
    type: "number",
    alias: "c",
    default: 100,
  })
  .option("width", {
    description: "Set the width",
    type: "number",
    alias: "w",
    default: 1920,
  })
  .option("height", {
    description: "Set the height",
    type: "number",
    alias: "h",
    default: 1080,
  })
  .option("variance", {
    description: "Set the variance",
    type: "number",
    alias: "v",
    default: Math.random(),
  })
  .option("format", {
    description: "Choose the format",
    type: "string",
    alias: "f",
    default: "png",
    choices: ["png", "svg"],
  })
  .help().argv;

// Generate the image
const trianglifier = trianglify({
  width: argv.width,
  height: argv.height,
  cellSize: argv.cellSize,
  ...(argv.xcolors && { xColors: argv.xcolors }),
  ...(argv.ycolors && { yColors: argv.ycolors }),
  variance: argv.variance,
});

// print out the base64 encoded SVG or PNG data to the console
// depending on the chosen format
if (argv.format === "svg") {
  console.log(trianglifier.toSVG().toString());
} else {
  // get the png stream
  const canvas = trianglifier.toCanvas();
  const stream = canvas.createPNGStream() as Readable;

  // convert the tream to base64 and print it to stdout
  const chunks: Buffer[] = [];
  stream.on("data", (chunk) => chunks.push(chunk));
  stream.on("end", () => {
    const buffer = Buffer.concat(chunks);
    console.log(buffer.toString("base64"));
  });
}
