import re
import random

random.seed(42)

arrangement = list(range(10))
random.shuffle(arrangement)
print(arrangement)

txt = """SPELL THE WORD.
[C-A-I-A-P-H-A-S]
SPELL THE WORD.
[P-H-A-R-I-S-E-E]
SPELL THE WORD.
[M-E-S-S-I-A-H]
SPELL THE WORD.
[B-E-T-H-A-N-Y]
SPELL THE WORD.
[G-A-L-I-L-E-E]
SPELL THE WORD.
[N-A-T-H-A-N-A-E-L]
SPELL THE WORD.
[B-E-T-H-S-A-I-D-A]
SPELL THE WORD.
[C-A-P-E-R-N-A-U-M]
SPELL THE WORD.
[T-I-B-E-R-I-A-S]
SPELL THE WORD.
[S-Y-N-A-G-O-G-U-E]
"""

all_q = [_ for _ in txt.split("\n") if _]
questions = [_ for _ in all_q if "[" not in _ and len(_.strip()) != 0]
answers = [_[1:-1] for _ in all_q if "[" in _]

# print(["-".join(list(_)) for _ in answers])
print([answers[_] for _ in arrangement])
print()
print(len(answers), len(questions))
print()
print([questions[_] for _ in arrangement])


q = ['According to John 4:3-4, where did Jesus go through on his way from Judea to Galilee?', 'According to John 3:23, what were the two reasons why John was baptizing at Aenon near Salim?', 'According to John 3:2, what was the basis for Nicodemus to claim that Jesus was the teacher who has come from God?', 'According to John 1:47, what did Jesus say of Nathanael when he saw him approaching?', 'According to John 1:29, what did John say when he saw Jesus coming toward him?', 'What was the name of the pool that Jesus told the man who was born blind to wash in?', 'According to John 4:6, why was Jesus tired?', 'Where was Philip, Andrew and Peter from?', 'When the Samaritans urged Jesus to stay with them, how long did he stay and where did he go thereafter?', 'According to John 2:19, how long did it take to build the temple?', ' The Sea of Galilee is also known as what?', 'According to John 3:5, no one can enter the kingdom of God unless __________.', 'According to John 1:49, what was Nathanael’s confession?', 'According to John 1:23, in whose voice did John reply those who were asking for his identity, and what was his response?', 'According to John 7:1, why did Jesus not want to go about in Judea?', 'John 6:70 reads ‘Then Jesus replied, “Have I not chosen you, the Twelve? Yet one of you is a devil!”’ Who was he referring to as ‘devil’ as mentioned in John 6:71?', 'According to John 1:46, what was Nathanael’s response to Philip after Philip claimed they had found the one Moses wrote about?', 'According to John 3:25, what was the argument that developed between some of John’s disciples and a Jew about?', 'When Jesus knew that they intended to make him king by force, what did he do?', 'According to John 1:18, how many people have seen God besides the one and only Son?', 'In John 8:6, what was Jesus writing on the ground with?', 'According to John 3:1, how was Nicodemus described?', 'In the miracle of feeding the five thousand in chapter 6, what did the boy Andrew spoke about have?', 'Which festival happened at Jerusalem in the winter where Jesus was in the temple courts walking in Solomon’sColonnade? JOHN 10:22-23', 'According to John 7:30 why did no one lay a hand on him (Jesus)?', 'The man at the pool of Bethesda has been an invalid for how many years?', 'According to John 4:12, who gave the well and who are those mentioned to have drunk from it (in the verse)?', 'According to John 3:3, no one can see the kingdom of God unless __________.', 'According to John 3:13, no one has ever gone into heaven except the one who came from heaven, who is the one who came from heaven?', 'In the beginning of John chapter 8 (John 8:1), where did Jesus go?', 'What had the Jewish leaders decided to do to anyone who acknowledged that Jesus was the Messiah?', 'When the disciples saw Jesus approaching the boat, walking on water, what was their reaction?', 'According to John 6:2, after Jesus crossed to the far shore of the Sea of Galilee, why did the great crown follow him?', 'According to John 8:10-11, what was Jesus’ question to the adulterous woman and what was the woman’s response?', 'According to John 2:5, what did Jesus’ mother say to the servants at the wedding?', 'When Jesus heard that Lazarus was sick, what was his response and how many more days did he stay where he was?', 'According to John 10:4, why will the shepherd’s sheep follow him?', 'According to John 1:20, what did John confess freely?', 'What was Jesus’ first statement/question to the Samaritan woman?', 'What was Jesus’ response when the people asked him “What must we do to do the works God requires?”', 'According to John 1:35, what did John say when he saw Jesus passing by?', 'What did Jesus do after he took the loaves, before distributing to those who were seated?', 'According to John 1:39, around what time of the day were they in?', 'According to John 1:46, what did Jesus say to Philip', 'After the events at Cana of Galilee, where did Jesus go to, with whom did He go and how long did they stay? According to John 2:12.', 'According to John 2:19, what was Jesus’ answer to the Jews who responded to Him by saying: “What sign can you show us to prove your authority to do all this?”', 'According to John 2:23, why would Jesus not entrust himself to the people?', 'According to John 1:19, who sent people to ask John who he was and who were the people sent?', 'According to John 1:42, when Andrew brought his brother Simon to Jesus, what did Jesus say?', 'According to John 7:7, why did the world hate him?']
a = ['Samaria', 'because there was plenty of water, and people were coming and being baptized.', '…no one could perform the signs you are doing if God were not with him.”', '“Here truly is an Israelite in whom there is no deceit.”', '“Look, the Lamb of God, who takes away the sin of the world!”', 'the Pool of Siloam', '…and Jesus, tired as he was from the journey…', 'Bethsaida', 'two days; Galilee', 'forty-six years', 'John 6:1 - the Sea of Tiberias', 'unless they are born of water and the Spirit.', '“Rabbi, you are the Son of God; you are the king of Israel.”', 'Isaiah; “I am the voice of one calling in the wilderness, ‘Make straight the way for the Lord.’”', 'because the Jewish leaders there were looking for a way to kill him.', '(He meant Judas, the son of Simon Iscariot, who, though one of the Twelve, was later to betray him.)', '“Nazareth! Can anything good come from there?” Nathanael asked.', 'ceremonial washing', 'JOHN 6:15 – he withdrew (again) to a mountain (by himself)', 'no one', 'his finger', '…a Pharisee…who was a member of the Jewish ruling council.', 'JOHN 6:5 - five small barley loaves and two small fish', 'the Festival of Dedication', 'because his hour had not yet come.', 'five years – John 5:5', 'Jacob; himself(Jacob), his sons and his livestocks', 'unless they are born again.', 'the Son of Man.', 'Mount of Olives', 'they would be put out of the synagogue.', 'JOHN 6:19 – they were frightened', 'because they saw the signs he had performed by healing the sick.', '“Woman, where are they? Has no one condemned you?”; “No one, sir”', 'His mother said to the servants, “Do whatever he tells you.”', '“This sickness will not end in death. No, it is for God’s glory so that God’s Son may be glorified through it.”; two more days', 'because they know his voice', '“I am not the Messiah.”', '“Will you give me a drink?”', 'JOHN 6:29 - “The work of God is this: to believe in the one he has sent.”', '“Look, the Lamb of God!”', 'JOHN 6:11 – he gave thanks', 'about four in the afternoon', '[The next day Jesus decided to leave for Galilee. Finding Philip, he said to him, “Follow me.”', 'Capernaum; his mother and brothers and his disciples; a few days', '“Destroy this temple, and I will raise it again in three days.”', 'He knew all people', 'the Jewish leaders in Jerusalem; priests and Levites', 'And he brought him to Jesus. Jesus looked at him and said, “You are Simon son of John. You will be called Cephas” (which, when translated, is Peter)]', '“because I testify that its works are evil.”']

