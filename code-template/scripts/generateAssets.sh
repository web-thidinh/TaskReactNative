BACKGROUND_COLOR=$1

echo "🔧 Generating Splashscreen"
npx react-native generate-bootsplash assets/icon-no-background.png \
  --background-color=$1 \
  --logo-width=100 \
  --assets-path=assets \
  --flavor=main
echo "✅ Generated Splashscreen"

echo "🔧 Generating App Icon"
cp assets/icon.svg icon.svg
cp assets/icon-background.svg icon-background.svg
npx react-native-svg-app-icon && rm icon.svg; rm icon-background.svg
echo "✅ Generated App Icon"