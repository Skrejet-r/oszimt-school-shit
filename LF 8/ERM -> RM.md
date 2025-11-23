>Relationale Datenmodell


![[Pasted image 20251001164051.png]]
| |  
V V 

![[Pasted image 20251001164950.png]]

![[Pasted image 20251001165024.png]]

#### ANFORDERUNGEN 
- Kein Tupel kommt doppelt vor
- Tupel sind nicht geordnet
- Attribute sind nicht geordnet

#### Tabellen:
- haben das Präfix T_ 
- stehen im Plural
- beginnen mit einem Großbuchstaben (z.B. T_Buecher)

#### Sonstiges
- Attribute werden kleingeschrieben in snake_case, z.B. xy_
- Primärschlüssel haben das Präfix p_xyz und das Suffix xyz_nr oder xyz_id
- Fremdschlüssel bekommen das Präfix f_xyz und haben ansonsten den gleichen Namen wie der referenzierte Primärschlüssel (ohne p_)
- Ist ein Fremdschlüssel auch Primärschlüssel bzw. Teil des Primärschlüssels muss pf_ statt f_ vor den Namen des Fremdschlüssels gesetzt werden (z.B. pf_kurs_nr statt f_kurs_nr).
- 
![[Pasted image 20251001165342.png]]

![[Pasted image 20251001165402.png]]

![[Pasted image 20251001165643.png]]