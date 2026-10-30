---
title: "Code Block Showcase"
date: 2026-10-29
description: "A draft post demonstrating code block features. Delete it, or set draft to false to publish."
draft: true
---

Inline code like `aws s3 ls` gets a subtle background. Blocks get syntax highlighting that follows your light or dark mode.

## A titled file

```ts title="src/lib/policy.ts"
export function isPublic(bucket: Bucket): boolean {
  return bucket.acl.grants.some((g) => g.grantee === 'AllUsers');
}
```

## Highlighted lines and line numbers

```python title="scan.py" showLineNumbers {3-4}
import boto3

s3 = boto3.client("s3")
for b in s3.list_buckets()["Buckets"]:
    print(b["Name"])
```

## Diffs

```diff
- "Effect": "Allow", "Principal": "*"
+ "Effect": "Deny",  "Principal": "*"
```

## Terminal

```bash
aws iam get-account-authorization-details --output json > iam.json
```

## Marked text

```json title="policy.json" ins={4} del={3}
{
  "Statement": [{
    "Action": "s3:*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::example/*"
  }]
}
```
