import { PrismaClient } from "@prisma/client";

const languages = [
  "assembly",
  "c",
  "c#",
  "c++",
  "clojure",
  "cobol",
  "coffeescript",
  "dart",
  "elixir",
  "erlang",
  "fortran",
  "f#",
  "go",
  "groovy",
  "haskell",
  "html",
  "java",
  "javascript",
  "julia",
  "kotlin",
  "lua",
  "matlab",
  "objective-c",
  "perl",
  "php",
  "powershell",
  "python",
  "r",
  "ruby",
  "rust",
  "scala",
  "scheme",
  "shell",
  "sql",
  "swift",
  "typescript",
  "vba",
  "vb.net",
  "verilog",
  "vhdl",
  "visual basic",
  "webassembly",
  "x86 assembly",
  "xml",
  "xslt",
  "yacc",
  "zsh",
];

const prisma = new PrismaClient();

async function main() {
  await prisma.language.createMany({
    data: languages.map((name) => {
      return { name };
    }),
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
