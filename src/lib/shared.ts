export function componentClasses(classes: string[]): string {
  return classes.reduce((acc, curr, i ) => {
    return acc += i === 0 ? `${curr}` : ` ${curr}`;
  }, '')
}

