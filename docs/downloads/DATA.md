# DATA.md - Datenstruktur Template

## Übersicht

<!-- Beschreibe kurz, welche Daten du verarbeitest -->

**Datenquelle:** [Name/URL]
**Format:** [XML/JSON/CSV/...]
**Umfang:** [Anzahl Datensätze]

---

## Entitäten

### Entität 1: [Name]

<!-- Beschreibe die Hauptentität -->

| Feld | Typ | Beschreibung | Beispiel |
|------|-----|--------------|----------|
| `id` | string | Eindeutiger Identifier | `entity-001` |
| `name` | string | Bezeichnung | `Beispielname` |
| `date` | date | Datum | `1850-01-15` |
| ... | ... | ... | ... |

### Entität 2: [Name]

<!-- Weitere Entitäten nach Bedarf -->

---

## Beziehungen

```
[Entität 1] --[Beziehungstyp]--> [Entität 2]
```

<!-- Beschreibe Beziehungen zwischen Entitäten -->

---

## Beispieldaten

```xml
<!-- Oder JSON/CSV - füge anonymisierte Beispiele ein -->
<example>
  <id>001</id>
  <name>Beispiel</name>
</example>
```

---

## Datenqualität

- [ ] Vollständigkeit: ...
- [ ] Konsistenz: ...
- [ ] Bekannte Probleme: ...

---

## Notizen

<!-- Weitere relevante Informationen zur Datenstruktur -->
