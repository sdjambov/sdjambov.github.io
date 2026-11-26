---
layout: page
permalink: /collaborations/
title: collaborations
description: past and present
nav: true
nav_order: 3
---

<div class="archive">
<table class="table table-sm table-borderless">
  <tbody>
    {% for coauthor_group in site.data.coauthors %}
    {% assign collaborators = coauthor_group[1] %}
    {% for collaborator in collaborators %}
    <tr>
      <td scope="row">
        <a href="{{ collaborator.url }}" target="_blank">{{ collaborator.name }}</a>
        ({{ collaborator.affiliation }})
      </td>
    </tr>
    {% endfor %}
    {% endfor %}
  </tbody>
</table>
</div>