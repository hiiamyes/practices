import openai

# 設置OpenAI API Key
openai.api_key = ""

# Define the text to analyze
text = "今天是正式的第一堂課，感覺有比較放鬆，不會像體驗課程時那樣緊張，也比較有勇氣開口講英文，雖然遇到有些單字不會唸，但也不會不敢講，因為老師都會鼓勵我試著講講看，錯了也沒關係，讓我不會害怕講英文！遇到不會或不懂的句子或單字，老師會以很貼切的方式去解釋讓我了解，像是was't bad會用張惠妹的bad boy bad boy 來讓我了解並印象深刻🤣🤣覺得50分鐘過很快，期待下次的課程"

# Define the prompt for the OpenAI API
prompt = "1.請從「教學風格」標籤中，挑選最符合下方「評論」的標籤不大於五個，不能選擇選項外的標籤。 標籤： 認真、親切、生動、耐心、熱情、用心、個人化、輕鬆、引導、啟發、互動、有趣、詳細、理解、指導、鼓勵、溝通、知識豐富、細心。2.請從「課程需求」標籤中，挑選最符合下方「評論」的標籤不大於五個，不能選擇選項外的標籤。標籤： 會話、文法、閱讀、詞彙、聽力、口說、實用技能、考試技巧、學習策略、解題技巧、學術研究、密集課程、（寫作）。3.請從「教材使用」標籤中，挑選最符合下方「評論」的標籤不大於五個，不能選擇選項外的標籤。 標籤： 資料、偈語、文章、卡通、影片、歌曲、諺語、遊戲、自製教材、個人化教學、互動式教學、系統性教學。產出格式為教學風格：課程需求：教材使用："

# Concatenate the prompt and the text
full_prompt = prompt + "\n" + text

# Define the OpenAI API parameters
engine = "gpt-3.5-turbo" 
temperature = 0.9
max_tokens = 2000

# Call the OpenAI API and get the response
response = openai.ChatCompletion.create(
  model=engine, 
  messages=[{"role": "user", "content": full_prompt}],
  temperature=temperature, 
  max_tokens=max_tokens
)

# Print the response
output = response.choices[0].message
print(output)
print(output.content)
