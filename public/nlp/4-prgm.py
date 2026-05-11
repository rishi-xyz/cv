class Parser:
    def __init__(self, grammar):
        self.grammar = grammar
        self.rules = self._build_rules(grammar)

    def _build_rules(self, grammar):
        rules = {}
        for lhs, rhs in grammar:
            if lhs not in rules:
                rules[lhs] = []
            rules[lhs].append(rhs)
        return rules

    def top_down_parse(self, sentence):
        return self._top_down_helper('S', sentence, 0, [])

    def _top_down_helper(self, non_terminal, sentence, index, tree):
        if index == len(sentence):
            return None
        if non_terminal in self.rules:
            for production in self.rules[non_terminal]:
                new_index = index
                new_tree = tree.copy()
                for symbol in production:
                    if symbol in self.rules:
                        result = self._top_down_helper(symbol, sentence, new_index, new_tree)
                        if result is None:
                            break
                        else:
                            new_index = result[0]
                            new_tree = result[1]
                    elif new_index < len(sentence) and sentence[new_index] == symbol:
                        new_tree.append((symbol, sentence[new_index]))
                        new_index += 1
                    else:
                        break
                if new_index == len(sentence) and len(new_tree) > 0:
                    return (new_index, new_tree)
        return None

    def bottom_up_parse(self, sentence):
        return self._bottom_up_helper(sentence, [])

    def _bottom_up_helper(self, sentence, stack):
        if len(sentence) == 0:
            return stack if stack else None
        word = sentence[0]
        sentence = sentence[1:]
        for lhs, rhs_list in self.rules.items():
            for rhs in rhs_list:
                if rhs == [word]:
                    stack.append(lhs)
                    break
        for lhs, rhs_list in self.rules.items():
            for rhs in rhs_list:
                if len(stack) >= len(rhs) and stack[-len(rhs):] == rhs:
                    stack = stack[:-len(rhs)] + [lhs]
        return self._bottom_up_helper(sentence, stack)

grammar = [
    ('S', ['NP', 'VP']),
    ('NP', ['Det', 'N']),
    ('VP', ['V', 'NP']),
    ('VP', ['V']),
    ('Det', ['a']),
    ('Det', ['the']),
    ('N', ['cat']),
    ('N', ['dog']),
    ('V', ['chases']),
    ('V', ['eats']),
]

parser = Parser(grammar)
sentence = ['the', 'cat', 'chases', 'a', 'dog']

top_down_result = parser.top_down_parse(sentence)
print("Top-Down Parse Result:", top_down_result)

bottom_up_result = parser.bottom_up_parse(sentence)
print("Bottom-Up Parse Result:", bottom_up_result)
