#!/bin/bash
cd /home/kavia/workspace/code-generation/wireframe-to-react-interface-22462-22471/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

