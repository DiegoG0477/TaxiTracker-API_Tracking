import { Crash } from "../../domain/entities/Crash";
import { CrashRepository } from "../../domain/CrashRepository";

export class RegisterCrashUseCase {
    constructor(private crashRepository: CrashRepository) {}

    async execute(crash: Crash): Promise<Crash | null> {
        return this.crashRepository.registerCrash(crash);
    }
}