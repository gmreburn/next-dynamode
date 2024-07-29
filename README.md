This repository was bootstraped using `pnpm create next-app@latest` to assist in triage of https://github.com/blazejkustra/dynamode/issues/32

# Steps to Reproduce

Run these commands:

```bash
docker-compose up
pnpm build
pnpm dlx dynamodb-admin
```

Navigate to [dynamodb-admin](http://localhost:8001), you should see a table named TABLE_NAME with 2 records. I expect the pk of the records to contain a prefix of USER#; however, the pk has no prefix applied.
