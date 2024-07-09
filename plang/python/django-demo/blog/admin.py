from django.contrib import admin

# Register your models here.

class BlogAdminArea(admin.AdminSite):
    site_header = "Blog Admin Area"

blog_admin_site = BlogAdminArea(name='BlogAdmin')
