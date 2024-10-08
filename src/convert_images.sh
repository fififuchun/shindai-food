#!/bin/bash

INPUT_DIR="./assets"
OUTPUT_DIR="./assets"

# mkdir -p "$OUTPUT_DIR"

for file in "$INPUT_DIR"/*.png; do
  filename=$(basename "$file" .png)
  cwebp "$file" -o "$OUTPUT_DIR/$filename.webp"
done

echo "変換が完了しました。"
