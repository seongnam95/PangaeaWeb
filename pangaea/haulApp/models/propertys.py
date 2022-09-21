from __future__ import unicode_literals
from django.contrib import admin
from haulApp.models.propertys import Propertys

from django.db import models
from django.utils import timezone


# 간단한 모임 모델 구성
class Propertys(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    text = models.TextField()
    date = models.DateTimeField()
    thumbnail = models.ImageField(u'썸네일',
                                  upload_to='%Y/%m/%d', blank=True, null=True)
    join_users = models.ManyToManyField('auth.User',
                                        verbose_name=u'참석', blank=True,
                                        related_name='join_moim')
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        Propertys.objects.filter(date__lte=timezone.now())\
                    .order_by('created_date')
        return self.title


admin.site.register(Propertys)  # 모델을 Admin에 등록
