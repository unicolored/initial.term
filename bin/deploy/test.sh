#! /bin/bash

set -e

npm run lint

npm run check

echo "✅ Tests completed"
