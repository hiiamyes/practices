# import openai
# # openai.api_key = ""


# openai.api_key = ""
# audio_file = open("./i.m4a", "rb")
# transcript = openai.Audio.transcribe("whisper-1", audio_file, "zh")
# # transcript = openai.Audio.transcribe({
# #     "file": audio_file,
# #     "model": "whisper-1",
# #     "language": "zh"
# # })

# # transcript = openai.Audio.translate("whisper-1", audio_file)
# print('q')
# print(transcript)


import os
import openai
openai.api_key = ""

completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": "Practice English"}
    ]
)

print(completion.choices[0].message)
