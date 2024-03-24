# Ввод ответов
answer_system = int(input())
answer_student = int(input())

# Проверка условий задачи
if (answer_system == 1 and answer_student == 1) or (answer_system != 1 and answer_student != 1):
    print("YES")
else:
    print("NO")
