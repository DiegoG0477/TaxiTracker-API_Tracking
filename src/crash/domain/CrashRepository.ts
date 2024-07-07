import { Crash } from "./entities/Crash";

export interface CrashRepository {
    registerCrash(crash: Crash): Promise<Crash | null>;
    // getCrashes(): Promise<Crash[] | null>;
}