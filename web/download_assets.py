import os
import urllib.request

assets = {
    'logo.png': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a20e8338361965fca69b662_Content-Creator-Project.png',
    'hero-bg.avif': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17b61447d8b03e7ae62ab5_f09b764e-f345-436a-98ad-1aa2ff35d371.avif',
    'partner-canada-life.png': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17b8a51817ffd03333469d_The_Canada_Life_Assurance_Company_logo_(post-amalgamation).svg.png',
    'partner-manulife.png': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17b8a58174a1fa61c2a720_Manulife_logo.svg.png',
    'partner-sun-life.svg': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17b901d0a0bd93c810980e_Sun_Life_Financial_Logo.svg',
    'partner-ia.svg': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17b93d6b1e84751397c374_IA_Financial_Group_logo.svg',
    'partner-equitable-life.png': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17d6ebbd29472343a62017_1280px-Equitable_Life_logo.png',
    'partner-foresters.svg': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17d742b87ad20da82d3730_Foresters_Financial_Logo.svg',
    'partner-equitable-bank.svg': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17d75b2ba04773f2f45fe8_Equitable_Bank_logo.svg',
    'partner-tugo.png': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17d7d1cefb172b2fa40fd9_images.png',
    'service-wealth.avif': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17b61447d8b03e7ae62ac7_fc46cf48-c3ce-450f-aab7-82a5c57600df.avif',
    'service-loan.avif': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17b61447d8b03e7ae62a8c_b3bcb15c-b3c7-4b1f-b923-f61f29b978b8.avif',
    'service-tax.avif': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17b61447d8b03e7ae62a7c_31e3e577-96ea-4721-ba3a-31562b38e2ec.avif',
    'client-alex.avif': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17b61447d8b03e7ae62a8f_6e7f96bf-eb77-42a6-8e71-31c8c8d74445.avif',
    'client-morgan.avif': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a17b61447d8b03e7ae62aa2_105af76b-9eab-4885-ac0e-0f9378ed09a8.avif',
    'team-ossio.jpg': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a258e43bd79c491c0cd05c2_Weixin%20Image_20260607232835_22_12.jpg',
    'team-henry.jpeg': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a258f0d40b7d2894dc9acc5_1748297924732.jpeg',
    'team-yuenyuen.jpeg': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a258bf110db1a130a35838b_Weixin%20Image_20260607224708_21_12.jpeg',
    'team-will.jpeg': 'https://cdn.prod.website-files.com/6a17b50762c00f6b8bd28a57/6a258456368827f3fc538115_1756361130615.jpeg',
}

dest_dir = os.path.join('src', 'assets')
os.makedirs(dest_dir, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

for name, url in assets.items():
    dest_path = os.path.join(dest_dir, name)
    print(f"Downloading {url} to {dest_path}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(dest_path, 'wb') as out_file:
                out_file.write(response.read())
        print("Success.")
    except Exception as e:
        print(f"Failed to download {name}: {e}")

print("Assets downloading completed.")
