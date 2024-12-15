# Drippy
## Let AI Style You!

Drippy allows you to unlock your hidden style with the power of AI!
With Drippy generate an outfit based of your clothes and the vibe your going for!


#### How To Use:
- Visit: https://drippy.vercel.app
- Click ``` Try for FREE ```
- Upload your clothes **(use a small image in size!)** _i aint payin for a gud server duh_
- Type in the vibe your going for
- Hit ``` Style Me ```
- Let the magic happen!

### Self host:

#### Setup Groq:
Drippy uses groq's api for the ai model
To set it up:
1) visit [https://groq.com](https://console.groq.com/)
2) create an account
3) once created, go to your API keys on the side bar
4) generate an API key and copy it to a file **(MAKE SURE TO SAVE IT SOMEWHERE SINCE U WONT BE ABLE TO VIEW IT AGAIN!)**
5) Done!

#### Setup imgbb
Drippy uses imgbb's api to temporarly store the closet image
To set it up:
1) visit [imgbb](https://api.imgbb.com/)
2) create an account
3) once created, head to https://api.imgbb.com/
4) generate an API key and copy it to a file **(same file we made for the groq api key)**
5) Done!

#### Host
In a folder run these command
```bash
git clone https://github.com/ItzCyzmiX/Drippy.git ./
npm i
```

change the api key in ``` src/routes/style/+server.js ``` the the one you saved (Groq)
change the api key in ``` src/routes/style/+page.svelte ``` the the one you saved (imgbb)

then run:
```bash
npm run dev
```
check the localy hosted version of the website in localhost:5137
If it works, all thats left is to build site with ``` npm run build ``` and host it online!
