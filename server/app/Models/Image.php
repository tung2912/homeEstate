<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'estate_id',
        'url'
    ];

    public function estate() {
        return $this->belongsTo(Estate::class,'estate_id');
    }

    function getNameImage(){
        return 'https://tungnguyenc3.s3.amazonaws.com/' .($this->url);
    }

}
