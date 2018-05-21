`random`
========

{% raw %}

The `random` function returns a random value depending on the supplied parameter type:

* a random item from a sequence;
* a random character from a string;
* a random integer between 0 and the integer parameter (inclusive).

````twig
{{ random(['apple', 'orange', 'citrus']) }} {# example output: orange #}
{{ random('ABC') }}                         {# example output: C #}
{{ random() }}                              {# example output: 15386094 (works as the native PHP mt_rand function) #}
{{ random(5) }}                             {# example output: 3 #}
````

Arguments
---------

* `values`: The values

{% endraw %}

[back]({{ site.baseurl }}{% link language-reference/functions/index.md %})