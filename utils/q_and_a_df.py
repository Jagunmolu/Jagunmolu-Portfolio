import pandas as pd
import random

random.seed(42)

def extract_questions(file_path: str, category: str="sn") -> list[str]:
    df = pd.read_excel(file_path, sheet_name=1)
    # return df[category].unique()
    res = df[df["category"] == category][["question", "answer"]]
    return [res["question"].values, res["answer"].values]

# sn
# question
# answer
# category

# general
# fill
# tof
# recitation
# spell

if __name__ == "__main__":
    q_and_a = extract_questions("romans_quiz.xlsx", "general")
    q = q_and_a[0].tolist()
    a = q_and_a[1].tolist()
    # for _ in res:
    #     print(_)
    arrangement = list(range(len(a)))
    random.shuffle(a)
    # print(arrangement)
    # print(res)
    # for _ in arrangement:
    #     print(q[_])
    # a = ["-".join(_) for _ in a]
    print(a)
