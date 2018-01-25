from data import data
from scipy.stats.stats import pearsonr   


dictionary = {
    "InfoVis" : [],
    "mathematics"  : [],   
    "statistical"  : [],   
    "artistry" : [],
    "computer usage" : [],   
    "programming"  : [],   
    "GFX prog." : [],
    "HCI prog." : [],
    "UX eval." : [],
    "communication"  : [],   
    "collaboration"  : [],   
    "code repository" : []
}

matrix = {
    "InfoVis" : {
        "InfoVis" : 0,
        "mathematics"  : 0,   
        "statistical"  : 0,   
        "artistry" : 0,
        "computer usage" : 0,   
        "programming"  : 0,   
        "GFX prog." : 0,
        "HCI prog." : 0,
        "UX eval." : 0,
        "communication"  : 0,   
        "collaboration"  : 0,   
        "code repository" : 0
    },
    "mathematics" : {
        "InfoVis" : 0,
        "mathematics"  : 0,   
        "statistical"  : 0,   
        "artistry" : 0,
        "computer usage" : 0,   
        "programming"  : 0,   
        "GFX prog." : 0,
        "HCI prog." : 0,
        "UX eval." : 0,
        "communication"  : 0,   
        "collaboration"  : 0,   
        "code repository" : 0
    },   
    "statistical"  : {
        "InfoVis" : 0,
        "mathematics"  : 0,   
        "statistical"  : 0,   
        "artistry" : 0,
        "computer usage" : 0,   
        "programming"  : 0,   
        "GFX prog." : 0,
        "HCI prog." : 0,
        "UX eval." : 0,
        "communication"  : 0,   
        "collaboration"  : 0,   
        "code repository" : 0
    },   
    "artistry" : {
        "InfoVis" : 0,
        "mathematics"  : 0,   
        "statistical"  : 0,   
        "artistry" : 0,
        "computer usage" : 0,   
        "programming"  : 0,   
        "GFX prog." : 0,
        "HCI prog." : 0,
        "UX eval." : 0,
        "communication"  : 0,   
        "collaboration"  : 0,   
        "code repository" : 0
    },
    "computer usage" : {
        "InfoVis" : 0,
        "mathematics"  : 0,   
        "statistical"  : 0,   
        "artistry" : 0,
        "computer usage" : 0,   
        "programming"  : 0,   
        "GFX prog." : 0,
        "HCI prog." : 0,
        "UX eval." : 0,
        "communication"  : 0,   
        "collaboration"  : 0,   
        "code repository" : 0
    },   
    "programming"  : {
        "InfoVis" : 0,
        "mathematics"  : 0,   
        "statistical"  : 0,   
        "artistry" : 0,
        "computer usage" : 0,   
        "programming"  : 0,   
        "GFX prog." : 0,
        "HCI prog." : 0,
        "UX eval." : 0,
        "communication"  : 0,   
        "collaboration"  : 0,   
        "code repository" : 0
    },   
    "GFX prog." : {
        "InfoVis" : 0,
        "mathematics"  : 0,   
        "statistical"  : 0,   
        "artistry" : 0,
        "computer usage" : 0,   
        "programming"  : 0,   
        "GFX prog." : 0,
        "HCI prog." : 0,
        "UX eval." : 0,
        "communication"  : 0,   
        "collaboration"  : 0,   
        "code repository" : 0
    },
    "HCI prog." : {
        "InfoVis" : 0,
        "mathematics"  : 0,   
        "statistical"  : 0,   
        "artistry" : 0,
        "computer usage" : 0,   
        "programming"  : 0,   
        "GFX prog." : 0,
        "HCI prog." : 0,
        "UX eval." : 0,
        "communication"  : 0,   
        "collaboration"  : 0,   
        "code repository" : 0
    },
    "UX eval." : {
        "InfoVis" : 0,
        "mathematics"  : 0,   
        "statistical"  : 0,   
        "artistry" : 0,
        "computer usage" : 0,   
        "programming"  : 0,   
        "GFX prog." : 0,
        "HCI prog." : 0,
        "UX eval." : 0,
        "communication"  : 0,   
        "collaboration"  : 0,   
        "code repository" : 0
    },
    "communication"  : {
        "InfoVis" : 0,
        "mathematics"  : 0,   
        "statistical"  : 0,   
        "artistry" : 0,
        "computer usage" : 0,   
        "programming"  : 0,   
        "GFX prog." : 0,
        "HCI prog." : 0,
        "UX eval." : 0,
        "communication"  : 0,   
        "collaboration"  : 0,   
        "code repository" : 0
    },   
    "collaboration"  : {
        "InfoVis" : 0,
        "mathematics"  : 0,   
        "statistical"  : 0,   
        "artistry" : 0,
        "computer usage" : 0,   
        "programming"  : 0,   
        "GFX prog." : 0,
        "HCI prog." : 0,
        "UX eval." : 0,
        "communication"  : 0,   
        "collaboration"  : 0,   
        "code repository" : 0
    },   
    "code repository" : {
        "InfoVis" : 0,
        "mathematics"  : 0,   
        "statistical"  : 0,   
        "artistry" : 0,
        "computer usage" : 0,   
        "programming"  : 0,   
        "GFX prog." : 0,
        "HCI prog." : 0,
        "UX eval." : 0,
        "communication"  : 0,   
        "collaboration"  : 0,   
        "code repository" : 0
    }
}

subjects = [
        "InfoVis",
    "mathematics",   
    "statistical",   
    "artistry",
    "computer usage",   
    "programming",   
    "GFX prog.",
    "HCI prog.",
    "UX eval.",
    "communication",   
    "collaboration",   
    "code repository",
]

for d in data:
    for s in subjects:
        dictionary[s].append(d[s])

print()
print()
for s1 in subjects:
    for s2 in subjects:
        matrix[s1][s2] = pearsonr(dictionary[s1],dictionary[s2])[0]

print("\t",end="")
for s in subjects:
    print(s[0:5], end="\t")
print()
for s1 in subjects:
    print(s1[0:5], end="\t")
    for s2 in subjects:
        if abs(matrix[s1][s2])>0.6 and matrix[s1][s2] != 1:
            print(round(matrix[s1][s2],2), end="\t")
        else:
            print("", end="\t")
    print()