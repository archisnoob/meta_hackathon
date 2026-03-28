# PackCompliance-Env

A pre-distribution batch compliance environment for packaged food products. Built for the OpenEnv-compliant Hackathon API standard using TypeScript and Next.js.

## Overview

This AI agent environment simulates a quality auditor that:
1. Receives a batch of 50–200 food packets to inspect.
2. Chooses packets to safely check using 3 inspection depths (label, formulation, regulatory).
3. Detects ingredient violations across FSSAI / FDA / EU CODEX constraints.
4. Dictates a binding batch verdict: PASS, HOLD, or QUARANTINE_SUBSET.

The risk-adaptive sampling budget dynamically escalates when the agent unearths early critical findings, forcing more packets into deeper checks.

## Development

```bash
npm install
npm run build
npm run test
npm run dev
```

## Docker

Build and run the container locally mapping it to port 7860:

```bash
docker build -t packcompliance-env .
docker run -p 7860:7860 packcompliance-env
```

## Validate

Make sure to install the pip module `openenv` if testing via the CLI:
```bash
openenv validate --url http://localhost:7860
```
