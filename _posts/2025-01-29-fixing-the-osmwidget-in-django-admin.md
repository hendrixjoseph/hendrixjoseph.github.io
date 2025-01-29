---
layout: post
title: Fixing the OSMWidget in Django Admin
tags: [django, programming, python]
---

I was setting up an admin for some [Django](https://www.djangoproject.com/) models that had a PointField the other day, and I ran into an issue that took a little digging to figure out.

Here's how I initially set up the admin, setting the `gis_widget_kwargs` like the [OSMWidget](https://docs.djangoproject.com/en/5.1/ref/contrib/gis/forms-api/#django.contrib.gis.forms.widgets.OSMWidget) documentation says:

```python
@admin.register(AddressModel)
class AddressModelAdmin(GISModelAdmin):
    gis_widget_kwargs = {
        "default_lon": -85.3148324,
        "default_lat": 40.3374484,
        "default_zoom": 20,
    }
```

But when I loaded the admin page for a given object of the model, I got the following error:

```
TypeError: OSMWidget.__init__() got an unexpected keyword argument 'default_lon'
```

Diggin into [the source code for OSMWidget](https://github.com/django/django/blob/main/django/contrib/gis/forms/widgets.py#L110) I noticed that the `__init__` function takes a keyword argument `attrs` which itself is a dict (or something that [getattr](https://docs.python.org/3/library/functions.html#getattr) can be used):

```python
class OSMWidget(OpenLayersWidget):
    """
    An OpenLayers/OpenStreetMap-based widget.
    """

    template_name = "gis/openlayers-osm.html"
    default_lon = 5
    default_lat = 47
    default_zoom = 12

    def __init__(self, attrs=None):
        super().__init__()
        for key in ("default_lon", "default_lat", "default_zoom"):
            self.attrs[key] = getattr(self, key)
        if attrs:
            self.attrs.update(attrs)
```

So I had to modify my `gis_widget_kwargs` to be a single-value dict with a value that itself is the dict I previously thought I had to use:

```python
@admin.register(AddressModel)
class AddressModelAdmin(GISModelAdmin):
    gis_widget_kwargs = {
        'attrs': {
            "default_lon": -85.3148324,
            "default_lat": 40.3374484,
            "default_zoom": 20,
        }
    }
```

After this change, my admin page loaded correctly.
