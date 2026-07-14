---
title: "NEXIAM Model Engine Architecture Plan"
date: 2026-07-14
tags: [nexiam, architecture, ml, admission-support-engines, design-plan]
draft: false
summary: "Plan for NEXIAM's model-agnostic AdmissionSupportEngine interface. Two initial engines: Yukee Cluster Engine (K-Means aptitude) and BGE Interest Engine (sentence embedding preference matching). Both visualized separately on the Triage Dashboard; counselor integrates."
layout: layouts/post.njk
---

# NEXIAM Model Engine Architecture Plan

**Philosophy:** Adopt models, don't make them. The engine interface is the contribution.

## Core Principle: Model-Agnostic Interface

```php
interface AdmissionSupportEngine
{
    public function analyze(array $features): AnalysisResult;
    public function metadata(): EngineMetadata;
    public function label(): string;
}
```

## Two Initial Engines

| Engine | Signal | Source | Method |
|---|---|---|---|
| Yukee Cluster Engine | Aptitude | Yukee et al. (2025) | K-Means cluster matching (K=4) on ICAT percentiles |
| BGE Interest Engine | Preference | BAAI/bge-base-en-v1.5 (HF, MIT) | Sentence embedding + cosine similarity |

## Dashboard Design

Engine outputs are **never combined** into one AI recommendation. The Triage Dashboard shows:
- **Left panel:** Aptitude cluster from Yukee Engine → recommended programs per mapping table
- **Right panel:** Interest similarity scores from BGE Engine → ranked program list

Counselor sees both, decides. Every action logged to HMAC-SHA256 audit trail.

## Configuration

Engines registered in `config/admission.php`. Flip `enabled` to add/remove. Same interface for all.

## Future Extension

Optional: expose engine registry to RAG chatbot, with disclaimer, for applicant self-service if future policy allows.

## Key Boundaries

- **Models adopted, not trained** — Yukee is published ISPSC research, BGE is MIT-licensed HF model
- **No AI combining** — counselor integrates aptitude + interest signals
- **Engine is the contribution** — the governed pipeline, not the algorithms
