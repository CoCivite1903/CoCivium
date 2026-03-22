# CoStacks ExecutionHelper v0

## Purpose
Define a compact execution-helper rail for sessions that need to turn compact pointer packs into concrete work with minimal dialogue.

## Inputs
- canonical bootstrap pins
- one self-mine pack
- one highest-priority mutation
- target repo root

## Outputs
- one vast reversible DO block
- public/raw pointers for resulting artifacts
- explicit verification receipts

## Rules
- prefer one giant block over fragmented chat steps
- fail closed on missing pins or wrong repo
- print target repo before mutation
- stage only intended files
- verify public/raw results when applicable
- compact notes over prose dumps

## Helper Pattern
bootstrap -> verify target -> mutate -> verify -> emit pointers

## Anti-Patterns
- path guessing
- mixed-repo mutation
- stale shell variables reused across repos
- claiming success before public verification