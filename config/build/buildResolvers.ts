import { ResolveOptions } from 'webpack';
import { aliases } from './aliases/aliases';

export function buildResolvers(): ResolveOptions {
  return {
    extensions: [".tsx",".ts",".js",".jsx"],
    alias: aliases(),
  }
}