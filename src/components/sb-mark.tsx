export function SBMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M192 0H32v64h128v32H32v160h160v-64H96v-32h96V0Z"
      />
      <path
        fill="currentColor"
        d="M224 0h64v256h-64Z"
      />
      <path
        fill="currentColor"
        d="M288 0h128v96H288V0Z"
      />
      <path
        fill="currentColor"
        d="M288 160h128v96H288V160Z"
      />
      <path
        fill="currentColor"
        d="M288 96h32v64h-32V96Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 0H16v32h64v16H16v80h96v-32H48v-16h48V0Z"/><path fill="${color}" d="M112 0h32v128h-32Z"/><path fill="${color}" d="M144 0h64v48H144V0Z"/><path fill="${color}" d="M144 80h64v48H144V80Z"/><path fill="${color}" d="M144 48h16v32h-16V48Z"/></svg>`;
}
