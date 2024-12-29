import re

txt = """Spell the word.
[CANAANITE]
Spell the word. Judges 14:19 - Where Samson struck down thirty men.
[ASHKELON]
Spell the word.
[MANASSEH]
Spell the word. Judges 3:8 - God sold the Israelites to him when God’s anger burned against them. 
[CUSHAN-RISHATHAIM]
Spell the word. Son of Kenaz, Caleb’s younger brother.
[OTHNIEL]
Spell the word. He sacrificed his daughter to fulfil his vow to God.
[JEPHTHAH]
Spell the word. Judges 2:12-13 - The Israelites aroused God’s anger by serving Baal and __________.
[ASHTORETHS]
"""

all_q = [_ for _ in txt.split("\n") if _]
questions = [_ for _ in all_q if "[" not in _]
answers = [_[1:-1] for _ in all_q if "[" in _]

# print(["-".join(list(_)) for _ in answers])
print(questions)
