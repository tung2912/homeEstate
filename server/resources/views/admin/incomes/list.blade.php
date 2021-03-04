@extends('admin.layout.master')

@section('page-title', 'Incomes List')

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">

                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example1" class="table table-bordered table-striped data-table">
                                <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Estates</th>
                                    <th>Total</th>
                                    <th>Employee Commission</th>
                                    <th>Company Income</th>
                                    <th>Owner Income</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    @forelse($doneEstates as $key => $doneEstate)
                                        <td>{{++ $key}}</td>
                                        <td>
                                            <button style="background-color: #529DDD;color: white" value="{{$doneEstate->id}}" class="btn details">Show Info <i class="nav-icon fas fa-eye"></i></button>
                                            <div style="display: none" class="detailHTML{{$doneEstate->id}}">
                                                <h5>Owner: {{$doneEstate->owner->name}}</h5>
                                                <p><span class="es-icon"><i class="fas fa-map-pin"></i></span> {{$doneEstate->address}}, {{$doneEstate->city->name}}</p>
                                                <p><span class="es-icon"><i class="fas fa-dollar-sign"></i></span>{{$doneEstate->price}}</p>
                                                <p><span class="es-icon"><i class="fas fa-th-large"></i></span> {{$doneEstate->floor_space}} sqft</p>
                                                <p><span class="es-icon"><i class="fas fa-bed"></i></span>{{$doneEstate->bedroom_nums}} Beds</p>
                                                <p><span class="es-icon"><i class="fas fa-bath"></i></span>{{$doneEstate->bathroom_nums}} Baths</p>
                                                <p><span class="es-icon"><i class="fas fa-car"></i></span>{{$doneEstate->garage_nums}} Garage</p>

                                                <h2>Description</h2>
                                                <div class="mt-1 border-top-1">
                                                    {!!$doneEstate->description!!}
                                                </div>
                                            </div>
                                        </td>
                                        <td>$ {{$doneEstate->price}}</td>
                                        <td>$ {{$doneEstate->price * 0.01}} - {{$doneEstate->city->user->name}}</td>
                                        <td>$ {{$doneEstate->price * 0.09}}</td>
                                        <td>$ {{$doneEstate->price * 0.9}} - {{$doneEstate->owner->name}}</td>

                                </tr>
                                @empty
                                    <tr>
                                        <td colspan="3">Không có dữ liệu</td>
                                    </tr>
                                @endforelse
                                </tbody>

                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>


@endsection

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" style="border: none; font-weight: bold" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        @section('js')
            <script>
                $('body').on('click','.details',function (){
                    let id = $(this).val();
                    let html = $('.detailHTML'+id).html();
                    $('.modal-body').html(html)
                    $('#exampleModal').modal('show')
                })
            </script>
@endsection
