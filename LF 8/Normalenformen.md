In der Datenbanktheorie geht es bei den Normalformen darum, Daten so zu organisieren, dass Redundanz minimiert und Anomalien vermieden werden. Es gibt mehrere Normalformen, die schrittweise die Qualität der Datenbankstruktur verbessern.
![[Pasted image 20251107144609.png]]
## 1. Normalform (1NF)

**Definition**: Eine Relation ist in der ersten Normalform (1NF), wenn alle Attribute atomar sind. Das bedeutet, dass jedes Attribut nur einen einzigen Wert enthält und keine mehrfachen Werte oder Listen in einem Attribut gespeichert sind.

**Beispiel**:

| ID | Name       | Telefonnummern        |
|----|------------|-----------------------|
| 1  | Max Mustermann | 123456, 987654  |
| 2  | Erika Mustermann | 555123       |

In diesem Beispiel ist die Telefonnummer ein nicht-atomarer Wert, da es mehrere Telefonnummern in einem einzigen Feld gibt. Um dies in 1NF zu bringen, muss die Tabelle geändert werden:

| ID | Name           | Telefonnummer |
|----|----------------|---------------|
| 1  | Max Mustermann | 123456        |
| 1  | Max Mustermann | 987654        |
| 2  | Erika Mustermann | 555123      |

Nun enthält jedes Attribut einen einzelnen Wert und ist in der ersten Normalform.

## 2. Normalform (2NF)

**Definition**: Eine Relation ist in der zweiten Normalform (2NF), wenn sie in der ersten Normalform (1NF) ist und alle Nicht-Schlüssel-Attribute vollständig vom Primärschlüssel abhängen. Das bedeutet, es gibt keine partiellen Abhängigkeiten von einem Teil des Schlüssels.

**Beispiel**:

| Student_ID | Kurs_ID | Kursname    | Note |
|------------|---------|-------------|------|
| 1          | 101     | Mathematik  | 1    |
| 1          | 102     | Informatik  | 2    |
| 2          | 101     | Mathematik  | 3    |

In diesem Beispiel hängt der Kursname nur von der Kurs-ID ab, nicht vom gesamten Schlüssel (Student_ID, Kurs_ID). Die Tabelle ist in 2NF, wenn diese Abhängigkeit entfernt wird. Die Tabelle wird in zwei Tabellen aufgeteilt:

**Studenten-Kurse**:

| Student_ID | Kurs_ID | Note |
|------------|---------|------|
| 1          | 101     | 1    |
| 1          | 102     | 2    |
| 2          | 101     | 3    |

**Kurse**:

| Kurs_ID | Kursname   |
|---------|------------|
| 101     | Mathematik |
| 102     | Informatik |

Jetzt sind alle Nicht-Schlüssel-Attribute vollständig vom Primärschlüssel abhängig.

## 3. Normalform (3NF)

**Definition**: Eine Relation ist in der dritten Normalform (3NF), wenn sie in der zweiten Normalform (2NF) ist und keine transitive Abhängigkeit zwischen Nicht-Schlüssel-Attributen existiert. Das bedeutet, dass Nicht-Schlüssel-Attribute nur direkt vom Primärschlüssel abhängen, nicht über ein anderes Nicht-Schlüssel-Attribut.

**Beispiel**:

| Studenten_ID | Name       | Stadt         | Postleitzahl |
|--------------|------------|---------------|--------------|
| 1            | Max Mustermann | Berlin      | 10115        |
| 2            | Erika Mustermann | Hamburg    | 20095        |

In diesem Beispiel hängt die Stadt von der Postleitzahl ab, was eine transitive Abhängigkeit darstellt. Die Tabelle muss geändert werden, um diese Abhängigkeit zu beseitigen:

**Studenten**:

| Studenten_ID | Name           | Postleitzahl |
|--------------|----------------|--------------|
| 1            | Max Mustermann | 10115        |
| 2            | Erika Mustermann | 20095      |

**Postleitzahlen**:

| Postleitzahl | Stadt      |
|--------------|------------|
| 10115        | Berlin     |
| 20095        | Hamburg    |

Jetzt sind alle Nicht-Schlüssel-Attribute nur direkt vom Primärschlüssel abhängig.

## Weitere Normalformen

### Boyce-Codd-Normalform (BCNF)

Eine Relation ist in BCNF, wenn sie in der dritten Normalform (3NF) ist und für jede funktionale Abhängigkeit X → Y gilt, dass X ein Superschlüssel ist. Dies beseitigt alle verbliebenen Abhängigkeitsprobleme.

### 4. Normalform (4NF)

Eine Relation ist in der vierten Normalform (4NF), wenn sie in der Boyce-Codd-Normalform (BCNF) ist und keine mehrwertigen Abhängigkeiten existieren. Das bedeutet, dass keine Attribute von mehreren unabhängigen Eigenschaften gleichzeitig abhängen.

### 5. Normalform (5NF)

Eine Relation ist in der fünften Normalform (5NF), wenn sie in der vierten Normalform (4NF) ist und keine Join-Abhängigkeiten existieren, die durch Zersplitten von Daten entstehen.

## Zusammenfassung

| Normalform | Anforderungen                                               |
|------------|------------------------------------------------------------|
| 1NF        | Keine mehrfachen Werte in einem Attribut                   |
| 2NF        | In 1NF und keine partiellen Abhängigkeiten vom Primärschlüssel |
| 3NF        | In 2NF und keine transitiven Abhängigkeiten zwischen Nicht-Schlüssel-Attributen |
| BCNF       | In 3NF und jede funktionale Abhängigkeit hat einen Superschlüssel als Determinante |
| 4NF        | In BCNF und keine mehrwertigen Abhängigkeiten               |
| 5NF        | In 4NF und keine Join-Abhängigkeiten                        |
