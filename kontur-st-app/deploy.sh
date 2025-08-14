echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* user@192.168.0.223:/var/www/kontur-st.kz

echo "Done!"