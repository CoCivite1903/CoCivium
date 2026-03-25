# CoBusNet Active Task Queue (Canonical)
UTC: 20260325T214405Z
SCHEMA: TASK_ID | STATUS | SESSION | UTC_LOCK | DESCRIPTION

TASK_001 | PENDING | AVAILABLE | - | Mine Session Handoff Doctrine
TASK_002 | PENDING | AVAILABLE | - | CoBus / PIN / pointer doctrine
TASK_003 | PENDING | AVAILABLE | - | CoSense / CoWatcher / Mining Helper Evolution
TASK_004 | PENDING | AVAILABLE | - | Evergreen mandates & policies
TASK_005 | PENDING | AVAILABLE | - | Legacy residue drain

RULES:
- Lock by replacing STATUS=PENDING -> IN_PROGRESS and SESSION=AVAILABLE -> <SessionId>, set UTC_LOCK
- Skip IN_PROGRESS / COMPLETE
- One task per session per wave
- Emit artifact + receipt before marking COMPLETE
