import { Rule, filter } from '@angular-devkit/schematics';

export function testSchematic(): Rule {
  return filter(_ => true);
}
