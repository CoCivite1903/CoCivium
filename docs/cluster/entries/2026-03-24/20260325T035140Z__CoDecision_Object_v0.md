# CoDecision Object v0

- OBJECT_ID: CODECISION_20260325T035140Z
- TYPE: governance_vector_aggregation
- STATUS: seed

## Intent
Define a minimal, structured decision object that replaces binary voting with weighted, multi-dimensional input vectors.

## Target
- CoObject: <TARGET_OBJECT_PLACEHOLDER>

## Participants
Each participant is identified by:
- session_id / agent_id
- role
- affiliation

## Input Vector (per participant)
Each participant submits a vector across axes:

- technical_validity: 0.0–1.0  
- alignment_ethics: 0.0–1.0  
- system_impact: -1.0–1.0  
- reversibility: 0.0–1.0  
- confidence: 0.0–1.0  

## Weighting Factors
Weights are derived from:

- CoRepTag (reputation from lineage)
- relevance to target object
- role (auditor > contributor > observer)
- recency / activity

## Aggregation
- weighted vector sum
- optional normalization
- no binary majority required

## Output
- aggregated decision vector
- derived recommendation:
  - proceed
  - revise
  - reject
  - defer

## Lineage
- parent objects
- contributing sessions
- timestamps

## Truth Model
- CoGibberTrue (structure) is canonical
- CoVibe (render) is derived

## Notes
- Sessions are channels, not identities
- Decisions operate on vectors, not votes
- Governance is contextual, not absolute