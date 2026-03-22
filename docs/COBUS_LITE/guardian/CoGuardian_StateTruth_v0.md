# CoGuardian StateTruth v0

## Purpose
Define strict truth precedence for operational state claims.

## Truth Precedence
1. public raw-verifiable artifacts
2. public repo commit pointers
3. canonical bootstrap pins
4. derived dashboards/UI
5. local files
6. prose recollection

## State Claim Rules
- do not claim write_attached without public raw-verifiable payload + sha256
- do not claim fully_hitched without an explicitly defined extra gate beyond write_attached
- local files alone imply only local_receipt_only
- if public truth contradicts chat/prose, public truth wins

## Allowed Attachment States
- bootstrapped
- read_attached
- write_attached
- fully_hitched
- blocked
- local_receipt_only

## Anti-Patterns
- assuming push implies correctness
- assuming dashboard implies truth
- assuming local artifact implies CoEx
- assuming repo/branch drift is harmless

## Truth Rule
Verified public artifacts are sole authority.