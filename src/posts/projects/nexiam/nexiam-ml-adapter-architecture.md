---
title: "NEXIAM ML Adapter Architecture"
date: 2026-07-03
tags: ["nexiam", "architecture", "ml", "k-means", "triage"]
layout: layouts/post.njk
summary: "Hot-swappable ClusterEngine interface for NEXIAM's triage dashboard — Yukee Baseline Engine as default, architectural hooks for future trained models."
---

## Core Concept

Instead of hardcoding K-Means logic or running live sklearn training, NEXIAM defines a ClusterEngine interface that abstracts the clustering logic behind a single classify() method. The system ships with one engine and is designed to accept others.

### Interface

```
interface ClusterEngine
{
    public function classify(array $features): ClusterResult;
    public function metadata(): EngineMetadata;
    public function label(): string;
}
```

### Engines

| Engine | When | Source |
|--------|------|--------|
| **Yukee Baseline Engine** | Default at launch | Static rule-matrix using Yukee et al. (2025) validated cluster definitions (K=4) |
| **Yukee Trained Engine** | Future — code obtained | Loads actual trained K-Means centroids/weights |
| **Custom Engine** | Future research | Plug in enriched features, different K, different algorithm |

### Configuration pattern (like Laravel Mail)

```
config/clustering.php
  'default_engine' => 'yukee_baseline'
  'engines' => [ 'yukee_baseline' => [...], 'yukee_trained' => [...] ]
```

Flip the default. No other code changes.

## Pattern Precedents (defense-ready)

- **Laravel Mail** — Mail::send() works same regardless of driver
- **MLflow Model Registry** — Register, version, serve. Client calls predict()
- **AI Gateway pattern** — One API, routes to any model

## Terminology Changes

| Old | New |
|-----|-----|
| Course Recommender | **Triage Dashboard** |
| K-Means module | **Cluster Engine** |
| Static rule matrix | **Yukee Baseline Engine** |
| ML-Assisted Course Triage module | **ML Adapter Layer** |
| "Limitation: no live training" | **"Architecture: engine-swappable"** |

## Dashboard (Engine-Aware)

The triage view shows which engine produced each recommendation. Counselors see the source, can override, and every action is logged to the HMAC-SHA256 audit trail with engine name and timestamp.

## Key Defense Lines

**"Did you just hardcode Yukee's numbers?"**
> "We built an ML Adapter Layer. The default engine uses Yukee's campus-validated parameters because they are the institution's own published, peer-reviewed findings. The architecture supports swapping in their actual trained model without touching the OMR pipeline, dashboard, or audit trail."

**"Why not live K-Means training?"**
> "The architecture supports it via a PreTrainedEngine. But live training on a production server introduces validation and reproducibility concerns that are separate research questions. We designed for model consumption; future researchers can add training with zero refactoring."

**"What makes this different from Yukee?"**
> "Yukee built a standalone clustering tool on archives. NEXIAM places validated clustering into a live operational pipeline — connected to OMR, RBAC, quotas, audit trails, and a counselor dashboard used at the point of consultation."

## Implementation Roadmap

1. Define ClusterEngine interface + config
2. Build Yukee Baseline Engine (rule-matrix, ~80 lines PHP)
3. Build engine-aware Triage Dashboard (Svelte)
4. Wire audit trail for override/approve/defer
5. Document architecture + future work in Chapter 3
