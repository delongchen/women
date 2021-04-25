import { PkgManager } from "../types/PkgManager";

export const PMS: Map<string, PkgManager> = new Map<string, PkgManager>()

export function addPM(pkg: PkgManager) {
  PMS.set(pkg.name, pkg)
}
