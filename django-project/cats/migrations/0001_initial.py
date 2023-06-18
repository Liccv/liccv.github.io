# Generated by Django 4.2 on 2023-06-16 11:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Pattern',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pattern', models.CharField(max_length=20)),
                ('language', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cats.language')),
            ],
        ),
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=20)),
                ('language', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cats.language')),
            ],
        ),
        migrations.CreateModel(
            name='CharacterTrait',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('character_trait', models.CharField(max_length=20)),
                ('language', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cats.language')),
            ],
        ),
        migrations.CreateModel(
            name='Cat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('image', models.ImageField(upload_to='photos/')),
                ('short_description', models.CharField(max_length=250)),
                ('history', models.CharField(max_length=600)),
                ('lifespan_min', models.IntegerField()),
                ('lifespan_max', models.IntegerField()),
                ('weight_min', models.IntegerField()),
                ('weight_max', models.IntegerField()),
                ('length_min', models.IntegerField()),
                ('length_max', models.IntegerField()),
                ('appearance', models.CharField(max_length=600)),
                ('care_difficulty', models.CharField(max_length=15)),
                ('care_description', models.CharField(max_length=600)),
                ('temperament', models.CharField(max_length=600)),
                ('character_traits', models.ManyToManyField(to='cats.charactertrait')),
                ('color', models.ManyToManyField(to='cats.color')),
                ('language', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cats.language')),
                ('pattern', models.ManyToManyField(to='cats.pattern')),
            ],
        ),
    ]
