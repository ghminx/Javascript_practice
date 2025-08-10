// updateReadme.js
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const README = path.join(ROOT, "README.md");
const START = "<!-- AUTO-GENERATED START -->";
const END = "<!-- AUTO-GENERATED END -->";

// 스캔 제외 폴더/파일
const IGNORE_DIRS = new Set(["node_modules", ".git", ".vscode", "dist", "build", "coverage"]);
const IGNORE_FILES = new Set(["package-lock.json", "updateReadme.js", "README.md"]);
const ALLOW_EXTS = new Set([".js", ".html", ".css"]); // 필요하면 확장자 추가

function walk(dir, list = new Map()) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    const rel = path.relative(ROOT, full);

    if (e.isDirectory()) {
      if (IGNORE_DIRS.has(e.name) || e.name.startsWith(".")) continue;
      walk(full, list);
    } else {
      if (IGNORE_FILES.has(e.name)) continue;
      const ext = path.extname(e.name).toLowerCase();
      if (!ALLOW_EXTS.has(ext)) continue;

      const dirKey = path.dirname(rel) || ".";
      if (!list.has(dirKey)) list.set(dirKey, []);
      list.get(dirKey).push(rel.replace(/\\/g, "/"));
    }
  }
  return list;
}

function buildAutoSection(groups) {
  // 정렬
  const dirs = [...groups.keys()].sort((a, b) => a.localeCompare(b));
  for (const d of dirs) groups.get(d).sort((a, b) => a.localeCompare(b));

  const now = new Date().toISOString().slice(0, 19).replace("T", " ");

  let md = "";
  md += `> 마지막 업데이트: ${now}\n\n`;

  if (dirs.length > 1) {
    md += `### 목차\n`;
    for (const d of dirs) {
      const label = d === "." ? "루트" : d;
      md += `- [${label}](#${label.replace(/[./\s]/g, "-")})\n`;
    }
    md += `\n`;
  }

  for (const d of dirs) {
    const section = d === "." ? "루트" : d;
    md += `### ${section}\n`;
    for (const rel of groups.get(d)) {
      const name = path.basename(rel);
      md += `- [${name}](${rel})\n`;
    }
    md += `\n`;
  }

  // 양 끝 마커 포함한 전체 블럭 반환
  return `${START}\n${md.trim()}\n${END}`;
}

function ensureReadme(content) {
  // README가 없으면 기본 템플릿 생성
  if (!content) {
    return `# ${path.basename(ROOT)}\n\n## 📚 파일 목록(자동)\n${START}\n${END}\n`;
  }
  // 마커가 없으면 삽입
  if (!content.includes(START) || !content.includes(END)) {
    return `${content.trim()}\n\n## 📚 파일 목록(자동)\n${START}\n${END}\n`;
  }
  return content;
}

(function main() {
  const groups = walk(ROOT, new Map());
  const autoBlock = buildAutoSection(groups);

  let readme = "";
  if (fs.existsSync(README)) {
    readme = fs.readFileSync(README, "utf8");
  }
  readme = ensureReadme(readme);

  // 마커 구간만 치환
  const replaced = readme.replace(
    new RegExp(`${START}[\\s\\S]*?${END}`),
    autoBlock
  );

  fs.writeFileSync(README, replaced);
  console.log("✅ README.md 업데이트 완료");
})();
