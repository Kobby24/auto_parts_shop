from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('AutoParts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='city',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='AutoParts.city'),
        ),
    ]
